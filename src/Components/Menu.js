import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
            <Color color={'red'} handleClick={props.handler} />
            <Color color={'salmon'} handleClick={props.handler} />
            <Color color={'pink'} handleClick={props.handler} />
            <Color color={'blue'} handleClick={props.handler} />
            <Color color={'green'} handleClick={props.handler} />
            <Color color={'yellow'} handleClick={props.handler} />
            <Color color={'orange'} handleClick={props.handler} />
            <Color color={'white'} handleClick={props.handler} />
            <Color color={'gray'} handleClick={props.handler} />
            <Color color={'black'} handleClick={props.handler} />
      </div>
    );
}

export default Menu;