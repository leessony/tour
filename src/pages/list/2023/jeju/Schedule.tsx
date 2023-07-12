import React from 'react';
import {useSearchParams} from "react-router-dom";

function Schedule() {
    const [params] = useSearchParams();

    return (
        <section>Jenu2023Schedule {params.get('date')}</section>
    )
}

export default Schedule;