
export interface FAQDataProps {
    id: number;
    question: string;
    answer: string;
}



export const faqData: FAQDataProps[] = [
    {
        id: 1,
        question: 'How does URL shortening work?',
        answer: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        id: 2,
        question: 'Is it necessary to create an account to use the URL shortening service?',
        answer: 'Yes, you need to create an account to use the URL shortening service. This is to ensure that you can keep track of your shortened links and access them at any time.'
    },

    {
        id: 3,
        question: 'Are the shortened links permanent? Will they expire?',
        answer: 'The shortened links are permanent and will not expire. However, if you delete your account, all of your shortened links will be deleted as well.'
    },

    {
        id: 4,
        question: 'Are there any limitations on the number of URLs I can shorten?',
        answer: 'There are no limitations on the number of URLs you can shorten. You can shorten as many URLs as you want.'
    },

    {
        id: 5,
        question: 'Can I customize the shortened URLs to reflect my brand or content?',
        answer: 'Yes, you can customize the shortened URLs to reflect your brand or content. You can choose a custom domain name and create a custom URL for each link.'
    },

    {
        id: 6,
        question: 'Can I track the performance of my shortened links?',
        answer: 'Yes, you can track the performance of your shortened links. You can see how many times each link has been clicked and where the clicks are coming from.'
    },

    {
        id: 7,
        question: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
        answer: 'The URL shortening service is very secure and the shortened links are protected against spam or malicious activity. The links are encrypted and can only be accessed by the person who created them.'
    },

    {
        id: 8,
        question: 'What is a QR code and what can it do?',
        answer: 'A QR code is a type of barcode that can be scanned with a smartphone camera. It can contain information such as a URL, contact information, or a text message.'
    },

    {
        id: 9,
        question: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
        answer: 'Yes, there is an API available for integrating the URL shortening service into your own applications or websites. You can find more information about the API on the developer page.'
    },        
        
]