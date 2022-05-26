
export const Searchbar = (props) => {



    return (
        <section className='searchbar'>

            <form action="" className="searchbar-form">

                <div className="searchber-form-label">
                    <label htmlFor="">Location </label>
                    <input type="text" placeholder="Anywhere" />
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Min price </label>
                    <input type="number" placeholder="Min price" />
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Max price</label>
                    <input type="number" placeholder="Max price" />
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check in</label>
                    <input type="date" />
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check out</label>
                    <input type="date" />
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Who</label>
                    <input type="number" placeholder="Guests" />
                </div>

            </form>
        </section>
    )

}
