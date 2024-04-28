# Facebook Unofficial API

**Mevcut Diller**: [🇹🇷](https://cy4u.dev/Facebook-Unofficial-API/tr "Turkish") [🇺🇸](https://cy4u.dev/Facebook-Unofficial-API/ "English") 

[**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook"), milyarlarca kullanıcısıyla dünyanın en popüler sosyal medya platformlarından biri olarak ön plana çıkıyor. 

İşletmeler, markalar ve bireyler için [**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook"), geniş kitlelere erişim sağlama, marka bilinirliğini artırma ve hedef kitleyle etkileşime geçme fırsatları sunuyor. Ancak, bu etkileşimleri artırmak ve yönetmek bazen karmaşık olabilir.

İşte bu noktada, **TypeScript** ile geliştirdiğimiz yeni [**Unofficial Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API") devreye giriyor.

Bu kütüphane, **Facebook** üzerindeki etkileşimlerinizi yönetmeyi kolaylaştırıyor ve işletmelerin veya geliştiricilerin Facebook platformunda daha etkili bir şekilde faaliyet göstermelerine olanak tanıyor.

## Facebook Kütüphanesine Giriş

Bu kütüphane, **TypeScript** ile **Node.JS** için yazılmıştır ve [**Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook API")'sini kullanarak çeşitli işlemleri gerçekleştirmenize olanak sağlar. İşte bu kütüphanenin sağladığı bazı özellikler:

- **Giriş Yap**: Kullanıcılar, kütüphaneyi kullanarak Facebook hesaplarına kolayca giriş yapabilirler. Bu, oturum açma sürecini basitleştirir ve daha hızlı bir başlangıç sağlar.

- **Sayfa Beğen**: İşletmeler veya kullanıcılar, sayfalarını büyütmek ve daha fazla takipçi çekmek için bu fonksiyonu kullanabilirler. Tek bir işlev çağrısı ile sayfa beğenme işlemi gerçekleştirilebilir.

- **Durum Beğen**: Kullanıcılar, diğer kullanıcıların durumlarını beğenebilirler. Bu, etkileşimi artırmanın ve kullanıcılar arasında bağlantı kurmanın etkili bir yoludur.

- **Gönderiye Yorum Yap**: İşletmeler veya bireyler, yayınladıkları gönderilere kullanıcıların yorum yapmasını sağlayabilirler. Bu, daha fazla katılım elde etmenin ve içeriğin daha geniş bir kitleye ulaşmasının bir yoludur.

Bu kütüphane, **Node.js**'nin gücünü kullanarak **Facebook** platformunda etkili bir şekilde faaliyet göstermenizi sağlar. Ayrıca, kullanımı kolaydır ve [**Facebook Unofficial API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API") çağrılarını yönetmek için gereken karmaşıklığı azaltır.

### Başlarken

Geliştirme sürecini başlatmak için sisteminizde **Node.js**'nin kurulu olduğundan emin olun. Resmi **Node.js website**sinden indirebilir veya yüklemek için **npm** (**Node Package Manager**) gibi bir paket yöneticisi kullanabilirsiniz.

#### Kurulum

```
$ npm i facebook-unofficial-api
$ bun i facebook-unofficial-api
$ pnpm i facebook-unofficial-api
```

#### Nasıl içe aktarılır

```js
const { Facebook } = require('facebook-unofficial-api');
```


#### Facebook ile giriş yapın

```js
async function loginRequest() {
 const facebookInstance = new Facebook();
 const Username = 'Your Facebook Mail or Username';
 const Password = 'Your Facebook Password';

// Eğer proxy kullanmak istiyorsanız facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.loginRequest(Username, Password).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
});

} loginRequest()
```

#### Kullanıcı Bilgilerini Çek

```js
async function checkUserDetails(){
const UUID = 'Facebook UUID -> Login işleminden alabilirisniz';
const Token = 'Facebook Token -> Login işleminden alabilirsiniz';

// Eğer proxy kullanmak istiyorsanız facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.checkUserDetails(UUID,Token).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
})
}checkUserDetails()
```

#### Gönderi & Sayfa Beğen

```js
const Token = 'Facebook Token -> Login işleminden alabilirsiniz';
const postID = 'pfbid027yBu3CAGH1f1mUPom2peRFdDpfWWZJaQy5obBojJobc4dYhuyY144maebMVnRCsBl';

// Eğer proxy kullanmak istiyorsanız facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.sendLike(postID, Token).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
});
```

#### Yorum Gönder

```js
const Token = 'Facebook Token -> Login işleminden alabilirsiniz';
const postID = 'pfbid027yBu3CAGH1f1mUPom2peRFdDpfWWZJaQy5obBojJobc4dYhuyY144maebMVnRCsBl';
const Message = 'Yorum';

// Eğer proxy kullanmak istiyorsanız facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.sendComment(postID, Token, Message).then((result) => {
console.log(result);
}).catch((err) => {
console.log(err);
});
```


#### Anahtar Kelimeler

[**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook"), [**Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook API"), [**Facebook Unofficial API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API"), [**Unofficial Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API"), [**NodeJS Developer**](https://cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://cy4u.dev "Node.JS Developer"), [**Backend Developer**](https://cy4u.dev "Backend Developer")

#### Sponsorluk & Bağış

[Github](https://github.com/sponsors/cy4udev "cy4udev github") | [Patreon](https://patreon.com/cy4udev "cy4udev patreon") | [BuyMeaCoffee](https://www.buymeacoffee.com/cy4udev "cy4udev BuyMeaCoffee")

#### Telif Hakkı ve Diğer Konular

Telif Hakkı: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Diğer Konular: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Sosyal Medya

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Youtube](https://www.youtube.com/@cy4udev "cy4udev youtube") | [Telegram](https://t.me/cy4udev "cy4udev telegram") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### Lisans

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://cy4u.dev "cy4udev")