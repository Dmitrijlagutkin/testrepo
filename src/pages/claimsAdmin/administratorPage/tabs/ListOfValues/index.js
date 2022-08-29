import { Button } from "reactstrap";

export default function ListOfValues({ clickBack }) {
    return (
        <div>
            <div className="tab-new-extract-button align-right">
                <Button style={{ width: 'auto' }}>Add New</Button>
                <Button onClick={clickBack} style={{ width: 'auto' }}>
                    Save
                </Button>
                <Button onClick={clickBack} style={{ width: 'auto' }}>
                    Reset
                </Button>
                <div>
                    <Button onClick={clickBack} style={{ width: 'auto' }}>
                        Back
                    </Button>
                </div>
            </div>

        </div>
    )
}


