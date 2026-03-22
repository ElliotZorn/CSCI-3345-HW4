import { Text, View } from "react-native";

interface TaskTypeProps {
    title: string
}

export const TaskType: React.FC<TaskTypeProps> = ({ title }) => {
    return (
        <Text className="text-tasktype">{title}</Text>
    );
}