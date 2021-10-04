import state from '../state'

const style = {
    zIndex: 1,
    position: 'absolute',
    bottom: '10vh',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.9,
    cursor: 'pointer'
}

const CameraButtons = ({}) => {

    const sets = {
        //audi
        1: {
            cameraPos: [3,5,3],
            target: [2,1,0],
            name: 'Object_20'
        },
        //tesla
        2: {
            cameraPos: [-3,5,3],
            target: [-2,1,0],
            name: 'object005_bod_0'
        }
    }
    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }

    return(
        //Fragment
        <> 
            <button
                onClick={ e => handleClick(2) }
                style={{
                    ...style,
                    left: '20vw',
                  
                }}
            >
                {'PREV'}
            </button>
            <button
                onClick={ e => handleClick(1) }
                style={{
                    ...style,
                    right: '20vw',
                 
                }}
            >
                {'NEXT'}
            </button>
        </>
    )
}

export default CameraButtons;