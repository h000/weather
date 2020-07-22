import json
from collections import OrderedDict
from bs4 import BeautifulSoup
from selenium import webdriver

file_data = OrderedDict()

options = webdriver.ChromeOptions()
options.add_argument('headless')

driver = webdriver.Chrome('/Users/hpark/Downloads/chromedriver', chrome_options=options)
driver.implicitly_wait(3)
driver.get('https://www.ssfshop.com/8Seconds/Knitwear/list?dspCtgryNo=SFMA41A03&brandShopNo=BDMA07A01&brndShopId=8SBSS&etcCtgryNo=&ctgrySectCd=&keyword=&leftBrandNM=8SECONDS_8SBSS')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
soup = soup.find('div', class_='list_goods')
imgs = soup.select('div > ul > li > a > img')
index = 0
for i in imgs:
    file_data[index] = (i['src'])
    index += 1

with open('img_src.json', 'w', encoding="utf-8") as make_file:
    json.dump(file_data, make_file, ensure_ascii=False, indent='\t')

driver.quit
# img = driver.find_elements_by_class_name("list_goods")
# print(img)
#for i in img:
#    print(i)
#res = requests.get("https://www.zara.com/kr/ko/woman-tshirts-l1362.html?v1=1549244")
#soup = soup.find('img', class_='product-media _img _imgImpressions _imageLoaded')
#print(soup)
# imgURL = soup.find("img")["src"]

# print(imgURL)