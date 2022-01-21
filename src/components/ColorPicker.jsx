import * as THREE from 'three';
import state from '../state'

const ColorPicker = () => {
    const handleClick = e => {
        if (!state.activeMesh) return;
        state.activeMesh.material.color = new THREE.Color(e.target.style.background)
      }
    return(
        <div style={{
            position: 'absolute', 
            zIndex:1,
            left: 0,
            right: 0,
            margin: 'auto',
            width: 'fit-content',
            display: 'flex',
            top: '20px',
            cursor: 'pointer'
        }}
        >
            <div onClick={handleClick}
            style={{
                background: 'black',
                height: 50,
                width: 50
            }}
            >
            </div>
            <div onClick={handleClick}
            style={{
                background: 'yellow',
                height: 50,
                width: 50
            }}
            >
            </div>
            <div onClick={handleClick}
            style={{
                background: 'red',
                height: 50,
                width: 50
            }}
            >
            </div>
            <div onClick={handleClick}
            style={{
                background: '#1B3D81',
                height: 50,
                width: 50
            }}
            >
            </div>
            <div onClick={handleClick}
            style={{
                background: '#E4C27E ',
                height: 50,
                width: 50
            }}
            ></div>
        </div>
    )
}

export default ColorPicker;