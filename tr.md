# Facebook Unofficial API

**Mevcut Diller**: [🇹🇷](https://www.cy4u.dev/Facebook-Unofficial-API/tr "Turkish") [🇺🇸](https://www.cy4u.dev/Facebook-Unofficial-API/ "English") 

[**Facebook**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook"), milyarlarca kullanıcısıyla dünyanın en popüler sosyal medya platformlarından biri olarak ön plana çıkıyor. 

İşletmeler, markalar ve bireyler için [**Facebook**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook"), geniş kitlelere erişim sağlama, marka bilinirliğini artırma ve hedef kitleyle etkileşime geçme fırsatları sunuyor. Ancak, bu etkileşimleri artırmak ve yönetmek bazen karmaşık olabilir.

İşte bu noktada, **TypeScript** ile geliştirdiğimiz yeni [**Unofficial Facebook API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API") devreye giriyor.

Bu kütüphane, **Facebook** üzerindeki etkileşimlerinizi yönetmeyi kolaylaştırıyor ve işletmelerin veya geliştiricilerin Facebook platformunda daha etkili bir şekilde faaliyet göstermelerine olanak tanıyor.

## Facebook Kütüphanesine Giriş

Bu kütüphane, **TypeScript** ile **Node.JS** için yazılmıştır ve [**Facebook API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook API")'sini kullanarak çeşitli işlemleri gerçekleştirmenize olanak sağlar. İşte bu kütüphanenin sağladığı bazı özellikler:

- **Giriş Yap**: Kullanıcılar, kütüphaneyi kullanarak Facebook hesaplarına kolayca giriş yapabilirler. Bu, oturum açma sürecini basitleştirir ve daha hızlı bir başlangıç sağlar.

- **Sayfa Beğen**: İşletmeler veya kullanıcılar, sayfalarını büyütmek ve daha fazla takipçi çekmek için bu fonksiyonu kullanabilirler. Tek bir işlev çağrısı ile sayfa beğenme işlemi gerçekleştirilebilir.

- **Durum Beğen**: Kullanıcılar, diğer kullanıcıların durumlarını beğenebilirler. Bu, etkileşimi artırmanın ve kullanıcılar arasında bağlantı kurmanın etkili bir yoludur.

- **Gönderiye Yorum Yap**: İşletmeler veya bireyler, yayınladıkları gönderilere kullanıcıların yorum yapmasını sağlayabilirler. Bu, daha fazla katılım elde etmenin ve içeriğin daha geniş bir kitleye ulaşmasının bir yoludur.

Bu kütüphane, **Node.js**'nin gücünü kullanarak **Facebook** platformunda etkili bir şekilde faaliyet göstermenizi sağlar. Ayrıca, kullanımı kolaydır ve [**Facebook Unofficial API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API") çağrılarını yönetmek için gereken karmaşıklığı azaltır.

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

[**Facebook**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook"), [**Facebook API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook API"), [**Facebook Unofficial API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API"), [**Unofficial Facebook API**](https://www.cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API"), [**facebook api for developers**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for developers"), [**facebook api meaning**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api meaning"), [**facebook api hide comment**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api hide comment"), [**facebook api get user info**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get user info"), [**facebook api configuration**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api configuration"), [**facebook api instagram insights**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api instagram insights"), [**facebook api delete post**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api delete post"), [**facebook api app**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api app"), [**facebook jobs api**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook jobs api"), [**facebook api graph explorer**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api graph explorer"), [**facebook api error code 100**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api error code 100"), [**facebook api block user**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api block user"), [**facebook api for whatsapp**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for whatsapp"), [**facebook api changes**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api changes"), [**facebook api integration**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api integration"), [**facebook api down**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api down"), [**facebook api access token**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api access token"), [**facebook api java**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api java"), [**facebook api error codes**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api error codes"), [**facebook api an unknown error occurred**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api an unknown error occurred"), [**facebook api key**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api key"), [**facebook api get posts**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get posts"), [**facebook api free**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api free"), [**facebook api breakdowns**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api breakdowns"), [**facebook api health check**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api health check"), [**facebook api for research**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for research"), [**facebook api javascript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api javascript"), [**facebook api typescript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api typescript"), [**facebook api nodejs**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api nodejs"), [**facebook api instagram_business_account**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api instagram_business_account"), [**facebook api data**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api data"), [**facebook api adset**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api adset"), [**facebook api javascript example**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api javascript example"), [**facebook api typescript example**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api typescript example"), [**facebook api nodejs example**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api nodejs example"), [**facebook api get comments from post**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get comments from post"), [**facebook api example**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api example"), [**facebook api business_management**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api business_management"), [**facebook api for groups**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for groups"), [**facebook api changelog**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api changelog"), [**api facebook help**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "api facebook help"), [**facebook api developer**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api developer"), [**facebook api explorer**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api explorer"), [**facebook api ad account**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api ad account"), [**facebook post api javascript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook post api javascript"), [**facebook post api typescript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook post api typescript"), [**facebook post api nodejs**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook post api nodejs"), [**facebook api events list**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api events list"), [**facebook api bubble**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api bubble"), [**facebook api health status**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api health status"), [**facebook api fields**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api fields"), [**facebook api create post**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api create post"), [**facebook api id**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api id"), [**facebook api date_preset**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api date_preset"), [**facebook api accounts**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api accounts"), [**facebook api java library**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api java library"), [**facebook api key create**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api key create"), [**facebook api get group posts**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get group posts"), [**facebook api error**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api error"), [**facebook api bugs**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api bugs"), [**facebook api feed**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api feed"), [**facebook api conversions**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api conversions"), [**facebook api header**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api header"), [**facebook api graph**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api graph"), [**facebook api documentation**](https://www.cy4u.dev/Facebook-Unofficial-API/tr ""facebook api documentation), [**facebook api insights metrics**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api insights metrics"), [**facebook api download video**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api download video"), [**facebook api access token expiration**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api access token expiration"), [**facebook share api javascript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook share api javascript"), [**facebook share api typescript**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook share api typescript"), [**facebook share api nodejs**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook share api nodejs"), [**facebook api enroll_status**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api enroll_status"), [**facebook api bot**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api bot"), [**facebook api hashtag search**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api hashtag search"), [**facebook api friends list**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api friends list"), [**facebook api campaign**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api campaign"), [**facebook api issues**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api issues"), [**facebook api debugger**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api debugger"), [**facebook api authentication**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api authentication"), [**facebook api json**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api json"), [**facebook api github**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api github"), [**facebook api endpoints**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api endpoints"), [**facebook api batch request**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api batch request"), [**facebook api key and secret**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api key and secret"), [**facebook api for posts**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for posts"), [**facebook api cost**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api cost"), [**facebook api html**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api html"), [**facebook api get posts from page**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get posts from page"), [**facebook api create event**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api create event"), [**facebook api instagram**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api instagram"), [**facebook api download**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api download"), [**facebook api ad creative**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api ad creative"), [**facebook javascript api tutorial**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook javascript api tutorial"), [**facebook typescript api tutorial**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook typescript api tutorial"), [**facebook nodejs api tutorial**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook nodejs api tutorial"), [**facebook api birthdays**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api birthdays"), [**facebook api generate access token**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api generate access token"), [**facebook api error_subcode 33**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api error_subcode 33"), [**facebook api for ads**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api for ads"), [**facebook api comments**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api comments"), [**facebook api insights**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api insights"), [**facebook api deprecation**](https://www.cy4u.dev/Facebook-Unofficial-API/tr ""), [**facebook api ads**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api ads"), [**facebook api events**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api events"), [**facebook api business_management permission**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api business_management permission"), [**facebook api key for facebook login**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api key for facebook login"), [**facebook api get pages list**](https://www.cy4u.dev/Facebook-Unofficial-API/tr "facebook api get pages list"), [**NodeJS Developer**](https://www.cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://www.cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://www.cy4u.dev "Node.JS Developer"), [**Backend Developer**](https://www.cy4u.dev "Backend Developer")

#### Sponsorluk & Bağış

[Github](https://github.com/sponsors/cy4udev "cy4udev github") | [Patreon](https://patreon.com/cy4udev "cy4udev patreon") | [BuyMeaCoffee](https://www.buymeacoffee.com/cy4udev "cy4udev BuyMeaCoffee")

#### Telif Hakkı ve Diğer Konular

Telif Hakkı: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Diğer Konular: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Sosyal Medya

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Youtube](https://www.youtube.com/@cy4udev "cy4udev youtube") | [Telegram](https://t.me/cy4udev "cy4udev telegram") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### Lisans

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://www.cy4u.dev "cy4udev")
