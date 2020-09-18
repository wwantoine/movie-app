import React from 'react'
import { Accordion, Card } from "react-bootstrap"

const FilterMenu = () => {


    return (
        <div className="col-md-2">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Sort
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Sort Results By:<br/>(DROPDOWN HERE)</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Filter
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Year Slider<br/>Rating Slider</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default FilterMenu
