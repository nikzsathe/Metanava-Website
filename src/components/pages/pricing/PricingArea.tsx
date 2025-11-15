import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: string;
   desc: string;
   price: number;
   list: string[];
   active?: string;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      title: "Full-package",
      desc: "Tailored service for large enterprises",
      price: 7500,
      list: ["API integrations and automation", "Dedicated account manager", "UX/UI design for digital products", "Ongoing support & maintenance",],
   },
   {
      id: 2,
      title: "Full-package",
      desc: "Tailored service for large enterprises",
      price: 7500,
      list: ["API integrations and automation", "Dedicated account manager", "UX/UI design for digital products", "Ongoing support & maintenance",],
      active: "greens",
   },
   {
      id: 3,
      title: "Full-package",
      desc: "Tailored service for large enterprises",
      price: 7500,
      list: ["API integrations and automation", "Dedicated account manager", "UX/UI design for digital products", "Ongoing support & maintenance",],
   },
];

const PricingArea = () => {
   return (
      <div className="td-pricing-area td-pricing-main-wrap pb-130">
         <div className="container">
            <div className="row">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                     <div className="td-pricing-6-wrap mb-30">
                        <div className="td-pricing-6-top">
                           <span className="package mb-35 d-inline-block">{item.title}</span>
                           <p className="para mb-55">{item.desc}</p>
                           <h6 className="price mb-30">$ {item.price}/<span>mo</span></h6>
                           <Link className={`price-btn ${item.active}`} to="/contact">Get Started</Link>
                        </div>
                        <div className="td-pricing-6-list">
                           <ul>
                              {item.list.map((list, i) => (
                                 <li key={i}>{list}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingArea
