function EmotionMeter(props) {
    
    if (props.feeling === 'HAPPY'){
        return (
            <i class="fas fa-smile-beam icone"></i>
        );
    } else if (props.feeling === 'SAD'){
        return (
            <i class="fas fa-frown-open icone"></i>
        );
    }
    
}

export default EmotionMeter;

