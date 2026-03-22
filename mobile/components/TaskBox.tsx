import React from "react";
import { View, Text, FlatList } from "react-native";
import { Task, TaskItem } from "./Task";

interface TaskBoxProps {
    title: string;
    tasks: TaskItem[];
    onToggleTask?: (id: string) => void;
}

export const TaskBox: React.FC<TaskBoxProps> = ({
    title,
    tasks,
    onToggleTask,
}) => {
    return (
        <View className=" flex-1 ">
            <Text className="text-lg font-semibold mb-4 text-tasktype">{title}</Text>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    <Text className="text-gray-400">No tasks yet</Text>
                }
                renderItem={({ item }) => (
                    <Task
                        id={item.id}
                        title={item.title}
                        done={item.done}
                        onToggle={onToggleTask}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};