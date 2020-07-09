from bs4 import BeautifulSoup
from selenium import webdriver
import json
from collections import OrderedDict
import time

driver = webdriver.Chrome('/Users/jiyoonhur/Downloads/chromedriver')
options = webdriver.ChromeOptions()
options.add_argument('headless')
driver.get("https://www.pinterest.co.kr/login/")

elem_login = driver.find_element_by_id("email") # 현재 크롬에 떠 있는 웹페이지에서 id 속성 값이 id 인 element를 찾음
elem_login.clear()
elem_login.send_keys("navjiyoon@naver.com") # typing

elem_login = driver.find_element_by_id("password")
elem_login.clear()
elem_login.send_keys("epik5071^^")

xpath = '//*[@id="__PWS_ROOT__"]/div[1]/div/div/div[3]/div/div/div[3]/form/div[5]/button/div'
driver.find_element_by_xpath(xpath).click()

driver.implicitly_wait(3)
driver.get("https://www.pinterest.co.kr/search/pins/?q=summer%20outfits&rs=typed&term_meta[]=summer%7Ctyped&term_meta[]=outfits%7Ctyped")
time.sleep(1)
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
imgs = soup.find_all('img', class_ = 'GrowthUnauthPinImage__Image')
data = OrderedDict()
index = 0
for i in imgs:
	data[index] = i['src']
	index += 1
with open('pin_imgs.json', 'w', encoding="utf-8") as make_file:
    json.dump(data, make_file, ensure_ascii=False, indent="\t")