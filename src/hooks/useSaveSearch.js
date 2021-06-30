import Crypto from 'crypto-js';

export function useSaveSearch(item) {
  
  const itemsSearched = localStorage.getItem('itemsSearched');
  if (!itemsSearched) {
    const itemsArr = [ item ];
    const dataEncrypt = Crypto.AES.encrypt(JSON.stringify(itemsArr), 'encryptjson').toString();
    localStorage.setItem('itemsSearched', dataEncrypt);
  } else {
    console.log(itemsSearched);
    const bytes = Crypto.AES.decrypt(itemsSearched, 'encryptjson');
    const items = JSON.parse(bytes.toString(Crypto.enc.Utf8));
    const newItemsSearched = [ item, ...items ];
    const newDataEncrypt = Crypto.AES.encrypt(JSON.stringify(newItemsSearched), 'encryptjson').toString();
    localStorage.setItem('itemsSearched', newDataEncrypt);
  }

  return localStorage.getItem('itemsSearched');
}
