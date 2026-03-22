import React from "react";
import { View, Text, Pressable } from "react-native";

export interface TaskItem {
    id: string;
    title: string;
    done: boolean;
}

interface TaskProps {
    id: string;
    title: string;
    done: boolean;
    onToggle?: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({ id, title, done, onToggle }) => {
    return (
        <Pressable
            onPress={() => onToggle?.(id)}
            className="flex-row items-center p-4 mb-3 bg-taskbackground rounded-2xl"
        >
            <View
                className={`w-6 h-6 mr-3 rounded-md border-2 items-center justify-center ${done ? "bg-green-500 border-green-500" : "border-gray-400"
                    }`}
            >
                {done && <Text className="text-white font-bold">✓</Text>}
            </View>

            <Text
                className={`text-base ${done ? "line-through text-gray-400" : "text-black"
                    }`}
            >
                {title}
            </Text>
        </Pressable>
    );
};