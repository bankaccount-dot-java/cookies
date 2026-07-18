import { Cookie } from "@/components/cookie"

const exhibit = [
    { name: "The Pawfect Chip", description: "choco chip cookie", price: 65 },
    { name: "Dalmation Delight", description: "cookies n' cream", price: 75 },
    { name: "Happy Tail Mix", description: "candy crunch cookie", price: 75 },
    { name: "Peanut Pawcket", description: "peanut butter cookie", price: 75 },
];

const new_products = [
    { name: "New!", description: "N/A", price: 45 },
    { name: "Newer!", description: "N/A", price: 50 },
];


export function Exhibit(){
    return(
        <div>
            <div className="new">
                <h2>New Products</h2>
                {new_products.map((cookie) => (
                    <Cookie
                        key={cookie.name}
                        name={cookie.name}
                        description={cookie.description}
                        price={cookie.price}
                    />
                ))}
            </div>
            <div className="exhibit">
                <h2>Exhibit</h2>
                {exhibit.map((cookie) => (
                    <Cookie
                        key={cookie.name}
                        name={cookie.name}
                        description={cookie.description}
                        price={cookie.price}
                    />
                ))}
            </div>
        </div>
            
        

    );
}

