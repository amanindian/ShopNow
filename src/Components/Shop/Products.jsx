import { React, useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Product from "../Main/Product";
import Filter from "./Filter";

export default function Products() {
    const { ProLists } = useContext(DataContext);

    const [newLitemList, setnewLitemList] = useState([...ProLists]);

    const [CatagValue, setCatagValue] = useState("Select Category")
    const [InputFilter, setInputFilter] = useState(null)


    useEffect(() => {
        if (CatagValue === "Select Category") {
            setnewLitemList(ProLists)
        } else {
            const newItemList = ProLists.filter((item) => {
                return item.categorys.includes(CatagValue) || item.Title.includes(InputFilter)
            })
            newItemList.length === 0 ?
                alert(`There are no item in ${CatagValue} Category or text ${InputFilter}`) :
                setnewLitemList(newItemList)
        }

    }, [CatagValue, ProLists, InputFilter])


    return (
        <section id="product-1">
            {/* <h2>Featured Products</h2>
            <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p> */}

            <Filter CatagValue={CatagValue} setCatagValue={setCatagValue} InputFilter={InputFilter} setInputFilter={setInputFilter} />

            <div className="container">
                {
                    newLitemList.map((element) => {
                        return (
                            <Product element={element} key={element.id} id={element.id} />
                        )
                    })
                }
            </div>
        </section>
    );
}
