interface CookieProps {
    name: string;
    description: string;
    price: number;

}

export function Cookie({name, description, price}: CookieProps){

    return (
        <div>
            <a href="#">
                <div>{ name }</div>
                <div>{ description }</div>
                <div>Php { price }</div>
            </a>
        </div>
    );
}

