import { Cookie } from "@/components/cookie"
import { cookiesData } from "@/data/cookies"


export function Exhibit(){
    return(
        <div>
            <div className="text-center">
                <h2>New Products</h2>
            </div>
            <div className="exhibit">
                <h2 className="text-center">Exhibit</h2>
                {cookiesData.map((cookie, index) => (
                    <Cookie
                        key={cookie.slug}
                        slug={cookie.slug}
                        name={cookie.name}
                        description={cookie.description}
                        price={cookie.price}
                        image={cookie.image}
                        isEven={index % 2 == 0}
                    />
                ))}
            </div>
        </div>
            
        

    );
}

