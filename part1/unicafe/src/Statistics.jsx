import StatisticLine from "./StatisticLine";

function Statistics(props) {

    if(props.good != 0 || props.bad != 0 || props.neutral != 0){
        return(
            <table>
                <tbody>
                    <tr><td><StatisticLine text="Good" value={props.good}/></td></tr>
                    <tr><td><StatisticLine text="Neutral" value={props.neutral}/></td></tr>
                    <tr><td><StatisticLine text="Bad" value={props.bad}/></td></tr>
                    <tr><td><StatisticLine text="All" value={props.good + props.bad + props.neutral}/></td></tr>
                    <tr><td><StatisticLine text="Average" value={(props.good - props.bad)/(props.good + props.bad + props.neutral)}/></td></tr>
                    <tr><td><StatisticLine text="Positive" value={(props.good / (props.good + props.bad + props.neutral)) * 100}/></td></tr> 
                </tbody>
            </table>
        );
    }else{
        return(
            <>
                <p>No feedback given</p>
            </>
        );
    }
}

export default Statistics;