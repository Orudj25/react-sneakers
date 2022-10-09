function Card() {
    return <div className="card">
            <div className="favorite">
                <img src="/unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src="/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/btn-plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
}

export default Card