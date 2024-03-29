import axios from 'axios';
import * as crypto from 'crypto';

class Facebook {
    private API_SECRET: string;
    private BASE_URL: string;
    private GRAPHQL_URL: string;

    constructor(apiSecret: string, baseUrl: string) {
        this.API_SECRET = '62f8ce9f74b12f84c123cc23437a4a32';
        this.BASE_URL = 'https://api.facebook.com/restserver.php';
        this.GRAPHQL_URL = 'https://graph.facebook.com';
    }

    private async sign_creator(data: Record<string, string>) {
        let sig = '';
        for (const [key, value] of Object.entries(data)) {
            sig += `${key}=${value}`;
        }
        sig += this.API_SECRET;
        sig = crypto.createHash('md5').update(sig).digest('hex');
        data.sig = sig;
    }

    public async loginRequest(u: string, p: string) {
        const user_agents: string[] = [
            "Mozilla/5.0 (Linux; Android 5.0.2; Andromax C46B2G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/60.0.0.16.76;]",
            "[FBAN/FB4A;FBAV/35.0.0.48.273;FBDM/{density=1.33125,width=800,height=1205};FBLC/en_US;FBCR/;FBPN/com.facebook.katana;FBDV/Nexus 7;FBSV/4.1.1;FBBK/0;]",
            "Mozilla/5.0 (Linux; Android 5.1.1; SM-N9208 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; U; Android 5.0; en-US; ASUS_Z008 Build/LRX21V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.8.0.718 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 5.1; en-US; E5563 Build/29.1.B.0.101) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.0.796 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Celkon A406 Build/MocorDroid2.3.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        ];
        const useragent: string = user_agents[Math.floor(Math.random() * user_agents.length)];

        const data: Record<string, string> = {
            api_key: '882a8490361da98702bf97a021ddc14d',
            credentials_type: 'password',
            email: u, // Assume email is passed as a command-line argument
            format: 'JSON',
            generate_machine_id: '1',
            generate_session_cookies: '1',
            locale: 'en_US',
            method: 'auth.login',
            password: p,
            return_ssl_resources: '0',
            v: '1.0'
        };

        await this.sign_creator(data);

        const requestOptions = {
            url: `${this.BASE_URL}?${new URLSearchParams(data).toString()}`,
            method: 'GET',
            headers: {
                'User-Agent': useragent
            },
        };
        try {
            const response = await axios(requestOptions);
            const responseData: any = response.data; // Yanıt veri yapısını any olarak tanımla
            return responseData;
        } catch (error: any) {
            return 'Error making request: ' + error.message;
        }
    }

    public async checkUserDetails(id: string, token: string) {
        const user_agents: string[] = [
            "Mozilla/5.0 (Linux; Android 5.0.2; Andromax C46B2G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/60.0.0.16.76;]",
            "[FBAN/FB4A;FBAV/35.0.0.48.273;FBDM/{density=1.33125,width=800,height=1205};FBLC/en_US;FBCR/;FBPN/com.facebook.katana;FBDV/Nexus 7;FBSV/4.1.1;FBBK/0;]",
            "Mozilla/5.0 (Linux; Android 5.1.1; SM-N9208 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; U; Android 5.0; en-US; ASUS_Z008 Build/LRX21V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.8.0.718 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 5.1; en-US; E5563 Build/29.1.B.0.101) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.0.796 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Celkon A406 Build/MocorDroid2.3.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        ];
        const useragent: string = user_agents[Math.floor(Math.random() * user_agents.length)];

        const requestOptions = {
            url: `${this.GRAPHQL_URL}/${id}?access_token=${token}`,
            method: 'GET',
            headers: {
                'User-Agent': useragent
            },
        };
        try {
            const response = await axios(requestOptions);
            const responseData: any = response.data; // Yanıt veri yapısını any olarak tanımla
            return responseData;
        } catch (error: any) {
            return 'Error making request: ' + error.message;
        }
    }

    public async sendComment(id: string, token: string, message: string) {
        const user_agents: string[] = [
            "Mozilla/5.0 (Linux; Android 5.0.2; Andromax C46B2G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/60.0.0.16.76;]",
            "[FBAN/FB4A;FBAV/35.0.0.48.273;FBDM/{density=1.33125,width=800,height=1205};FBLC/en_US;FBCR/;FBPN/com.facebook.katana;FBDV/Nexus 7;FBSV/4.1.1;FBBK/0;]",
            "Mozilla/5.0 (Linux; Android 5.1.1; SM-N9208 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; U; Android 5.0; en-US; ASUS_Z008 Build/LRX21V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.8.0.718 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 5.1; en-US; E5563 Build/29.1.B.0.101) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.0.796 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Celkon A406 Build/MocorDroid2.3.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        ];
        const useragent: string = user_agents[Math.floor(Math.random() * user_agents.length)];

        const requestOptions = {
            url: `${this.GRAPHQL_URL}/${id}/comments`,
            method: 'POST',
            headers: {
                'User-Agent': useragent
            },
            data: {
                access_token: token,
                message: message,
                method: 'post'
            }
        };
        try {
            const response = await axios(requestOptions);
            const responseData: any = response.data; // Yanıt veri yapısını any olarak tanımla
            return responseData;
        } catch (error: any) {
            return 'Error making request: ' + error.message;
        }
    }

    public async sendLike(id: string, token: string) {
        const user_agents: string[] = [
            "Mozilla/5.0 (Linux; Android 5.0.2; Andromax C46B2G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/60.0.0.16.76;]",
            "[FBAN/FB4A;FBAV/35.0.0.48.273;FBDM/{density=1.33125,width=800,height=1205};FBLC/en_US;FBCR/;FBPN/com.facebook.katana;FBDV/Nexus 7;FBSV/4.1.1;FBBK/0;]",
            "Mozilla/5.0 (Linux; Android 5.1.1; SM-N9208 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; U; Android 5.0; en-US; ASUS_Z008 Build/LRX21V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.8.0.718 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 5.1; en-US; E5563 Build/29.1.B.0.101) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.0.796 U3/0.8.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Celkon A406 Build/MocorDroid2.3.5) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        ];
        const useragent: string = user_agents[Math.floor(Math.random() * user_agents.length)];

        const requestOptions = {
            url: `${this.GRAPHQL_URL}/${id}/likes`,
            method: 'POST',
            headers: {
                'User-Agent': useragent
            },
            data: {
                access_token: token,
                method: 'post'
            }
        };
        try {
            const response = await axios(requestOptions);
            const responseData: any = response.data; // Yanıt veri yapısını any olarak tanımla
            return responseData;
        } catch (error: any) {
            return 'Error making request: ' + error.message;
        }
    }

}

export { Facebook };
