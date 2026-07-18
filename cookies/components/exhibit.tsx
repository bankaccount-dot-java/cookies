import { Cookie } from "@/components/cookie"
import { cookiesData } from "@/data/cookies"


export function Exhibit(){
    return(
        <div>
            <div className="new">
                <h2>New Products</h2>
            </div>
            <div className="exhibit">
                <h2>Exhibit</h2>
                {cookiesData.map((cookie) => (
                    <Cookie
                        key={cookie.slug}
                        slug={cookie.slug}
                        name={cookie.name}
                        description={cookie.description}
                        price={cookie.price}
                        image={cookie.image}
                    />
                ))}
            </div>
        </div>
            
        

    );
}

