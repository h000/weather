from urllib.error import URLError, HTTPError
import urllib.request
from bs4 import BeautifulSoup
from selenium import webdriver

#웹페이지 소스 갖고오기
headers = {'User-Agent' : 'Chrome/66.0.3359.181'}
url = "https://www.ssfshop.com/8Seconds/ssfshop/list?dspCtgryNo=SFMA41A01&brandShopNo=BDMA07A01&brndShopId=8SBSS&etcCtgryNo=&ctgrySectCd=&keyword=&leftBrandNM=8SECONDS_8SBSS"
req = urllib.request.Request(url, headers=headers)
fp = urllib.request.urlopen(req)
#source = fp.read();
#fp.close();

#소스에서 img class 하위의 소스를 가져온다.
soup = BeautifulSoup(fp, 'html.parser')
print(soup.contents)
soup = soup.select("#dspGood")
#print(soup)
soup = soup.find_all('li')
soup = soup.find('a')
soup = soup.find("img")
print(soup)
#이미지 경로를 받아온다.
#imgURL = soup.find("img")