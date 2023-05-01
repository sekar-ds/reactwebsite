import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';
import { Link} from "react-router-dom";





// import images
import AboutImg from '../src/assets/img/features/aboutus2.png';
import Feature1Img from '../src/assets/img/features/digitalmk1.png';
import Feature2Img from '../src/assets/img/features/seo1.png';
import Feature3Img from '../src/assets/img/features/business1.png';
import Feature4Img from '../src/assets/img/features/webdesign1.png';
import Companylogo1 from '../src/assets/img/features/companylogo8.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';


export const navigationData = [

  {
    name: <Link to="/about">About</Link> ,
    href: "about",
  },
  {
    name: <Link to="/Feature">Features</Link>,
    href: 'Feature',
  },
  {
    name: 'Signup',
    href: '#',
  },
];


export const heroData = {
  title: ` Order Products Faster Easier`,
  subtitle:
    'Order your favorite foods at any time and we will deliver them right to where you are.',
  btnText: 'Get Started',
  image: Companylogo1,
 
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Digital Marketing',
      description:
        'Pay with a Visa or PayPal card and without much ado',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Search Engine Optimization',
      description:
        'We offer sale of products through the Internet..',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Business Development',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'WEb DEvelopement',
      description:
        'In our app you can see the delay time of your order...',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    title:'Requirement Gathering',
    message:'At Joyrts , we believe in staying at the forefront of technology and using the latest tools and platforms to deliver results for our clients. Some of the technologies we use include.',
    delay: '300',
  },
  {
    title:'Digital Marketing Services',
    message:'We provide a full suite of digital marketing services, including pay-per-click advertising, search engine optimization,social media marketing, and email marketing. Our team of experts will help you reach your target audience and generate leads, conversions, and revenue.',
    delay: '300',
  },
  {
    title:'Web Designing Services',
    message:'Web Designing Services - We offer custom web design services that are tailored to meet your unique needs and goals. Our designs are not only visually appealing but also user-friendly, responsive, and optimized for search engines.',
    delay: '300',
  },
  {
    title:'Application Developmentservices',
    message:'Application Development Services - Whether you need a custom application for your business or a mobile app for your customers, our team of developers will work with you to design, build, and launch a solution that meets your needs.',
    delay: '300',
  },
  {
    title:'Application Support Services',
    message:'Application Support Services - We provide ongoing support for your applications to ensure they continue to function properly and meet your changing needs..',
    delay: '300',
  },
  {
    title:'Cloud Hosting Services',
    message:'Our cloud hosting services offer the scalability, reliability, and security you need to keep your website or application running smoothly..',
    delay: '300',
  },
  {
    title:'Business Support Services',
    message:'We provide a range of business support services to help you manage and grow your business, including financial management, customer support, and more.',
    delay: '300',
  },
  {
    title:'Technology stack JAVA - python',
    message:'We provide a range of technology  to help you manage and grow your business, including financial management, customer support, and more.',
    delay: '300',
  },
  {
    title:'BPO-BPM Digital Design, SEO and Marketing',
    message:'We provide a range of BPO-BPM Digital Design, SEO and Marketing to help you manage and grow your business, including financial management, customer support, and more.',
    delay: '300',
  },
  
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'info@producttexas.project',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};


export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};