import { useEffect, useState } from "react";
import { View } from "react-native"

export interface ProgressProps {
    progress: number;
}

const Progress = (props: ProgressProps) => {
    const {progress} = props
    const [completed,setCompleted] = useState<number>(progress)
    useEffect(() => { setCompleted(progress) },[progress])

    return (
        <View className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <View style={{width: `${completed}%`}} className={`bg-primary h-2.5 rounded-full`}></View>
        </View>
    )
}

export default Progress