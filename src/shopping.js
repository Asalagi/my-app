import { useState, useRef } from 'react';
import './My-App.css';
// import bale from './bale.jpeg';

function Shop() {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
    
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.tareget);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target);
    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };

    return (
        <>
        {list&&
        list.map((item, index) => (
            <div style={{backgroundColor:'grey', margin:'10px 45%', textAlign:'center', fontSize:'4'}}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop} 
                key={index} 
                draggable>
                {item}
            </div>
            ))}
        </>
 /*       <div>
            <h2>Adding an Image</h2>
            <img src={bale} alt="bale" />
        </div> */
    );
 }


export default Shop;