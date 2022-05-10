import SimpleReactFooter from "simple-react-footer";
// import "./footer.scss"
// for documentation of footer refer https://www.npmjs.com/package/simple-react-footer

const description = "If you've been following the appreciation of virtual currencies, you've probably heard an awful lot about bitcoin -- and with good reason. It was the first tradable cryptocurrency that was brought to market, and it currently makes up 54% of the aggregate $589 billion market cap of all cryptocurrencies.  However, it's far from alone. There are more than 1,300 other virtual currencies that investors can buy, of which over two dozen have a market cap that's in excess of $1 billion.";
const title = "Contact Us";
const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
];
const Footer = () => {
    return (
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="mayankesh-jha-15446b206"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="Mayankesh Jha"
                iconColor="white"
                backgroundColor="#3f3b36"
                fontColor="white"
                copyrightColor="darkgrey"
            />
    )
}

export default Footer
