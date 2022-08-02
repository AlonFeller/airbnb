import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { stayService } from "../../services/stay.service"

export const Leads = () => {
    useEffect(() => {
    }, [])
    const cities = stayService.getBy()
console.log(cities);

    return (
        <section className="Leads container">
            {cities.forEach(city => {
                <h3>{city}</h3>

            })}
        </section>
    )
}