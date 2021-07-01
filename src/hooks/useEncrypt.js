import Crypto from "crypto-js";

export default function useEncrypt() {
  
  const encrypt = (data, secretkey) => Crypto.AES.encrypt(data, secretkey).toString();

  const decrypt = (data, secretkey) => {
    const bytes  = Crypto.AES.decrypt(data, secretkey);
    return bytes.toString(Crypto.enc.Utf8);
  }

  return { encrypt, decrypt };

}
