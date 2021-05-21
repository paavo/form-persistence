import { Draggable } from "react-beautiful-dnd";

const InputLine = ({ inputLine, index, formFields, formFieldNameChanged, conversionFieldNameChanged , removeLine}) => {
    return (
        <Draggable draggableId={inputLine.id} index={index}>
            {provided => (
                <div
                    className="neos-control-group"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <select className={'neos-span5'} onChange={(event) => { formFieldNameChanged(event, index) }} value={inputLine.value}>
                        {
                            formFields.map(item => {
                                return <option key={item.id} value={item.id}>{item.label}</option>
                            })
                        }
                    </select>
                    <i className={'fas fa-arrow-right icon-white'} />
                    <input
                        type="text"
                        placeholder="conversion to field name"
                        value={inputLine.conversionValue}
                        onChange={(event) => { conversionFieldNameChanged(event, index) }}
                        className={'neos-span5'}
                    />
                    <button className={'neos-button neos-button-primary neos-pull-right'}  onClick={() => { removeLine(index) }}><i className={'fas fa-minus icon-white'} /></button>
                </div>
            )}
        </Draggable>
    )
}

export default InputLine;
