import "./renderSearch_module.css"

export const RenderSearchResultsBlock = (data) => {
    console.log(`data: ${[data]}`);

    return (

        <section class="page-wrapper">
            <h2 class="text-lev2 text-center">Наши догситтеры</h2>
            <div class="grid-card">
                <a href="#" class="card">
                    <img src="https://picsum.photos/200/300" alt="" />
                    <div class="card-content">
                        <h3 class="text-lev3">Наталья</h3>
                        <p>У Лукоморья дуб зеленый. Златая цепь на дубе том. И днем. и ночью кот ученый все ходит по цепи кругом</p>
                        <span>
                            <div class="address text-additional">г. Кременчуг-Константиновское</div>
                            <div class="address text-additional">ул. Центральная, д. 37</div>
                        </span>
                    </div>
                    <div class="card-info">

                        <div class="price">
                            от 1500 ₽
                    </div>
                        <button class="btn">89999999999</button>
                    </div>
                </a>
            </div>
        </section>
    )
}

