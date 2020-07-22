from bs4 import BeautifulSoup
from selenium import webdriver
import json
from collections import OrderedDict

options = webdriver.ChromeOptions()
options.add_argument('headless')

driver = webdriver.Chrome('/Users/hpark/Downloads/chromedriver', chrome_options=options)
#driver = webdriver.Chrome("/Users/jiyoonhur/Downloads/chromedriver", chrome_options=options)
driver.implicitly_wait(3)
driver.get("https://www.ssfshop.com/8Seconds/Short-Sleeve/list?dspCtgryNo=SFMA41A01A02&brandShopNo=BDMA07A01&brndShopId=8SBSS&etcCtgryNo=&ctgrySectCd=&keyword=&leftBrandNM=8SECONDS_8SBSS")
html = driver.page_source

soup = BeautifulSoup(html, 'html.parser')
soup = soup.find('div', class_ = 'list_goods')
imgs = soup.select('div > ul > li > a > img')

data = OrderedDict()

index = 0
for i in imgs:
	data[index] = i['src']
	index += 1

with open('imgs.json', 'w', encoding="utf-8") as make_file:
    json.dump(data, make_file, ensure_ascii=False, indent="\t")
