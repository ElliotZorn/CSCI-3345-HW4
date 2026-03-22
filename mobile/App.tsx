import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, View, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { TaskBox } from "components/TaskBox";
import { Header } from "components/Header";

import "./global.css";

export default function App() {
  const [tasks, setTasks] = useState({
    home: [
      { id: "1", title: "Water indoor plants", done: false },
    ],
    design: [
      { id: "2", title: "Create icons for a dashboard", done: false },
      { id: "3", title: "Prepare a design presentation", done: false },
    ],
    personal: [
      { id: "4", title: "Stretch for 15 minutes", done: false },
      { id: "5", title: "Plan your meal", done: false },
      { id: "6", title: "Review daily goals before sleeping", done: false },
    ],
  });

  const toggleTask = (section: "home" | "design" | "personal", id: string) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white p-4">
        <Header />

        <TaskBox
          title="Design"
          tasks={tasks.home}
          onToggleTask={(id) => toggleTask("home", id)}
        />

        <TaskBox
          title="Personal"
          tasks={tasks.design}
          onToggleTask={(id) => toggleTask("design", id)}
        />

        <TaskBox
          title="House"
          tasks={tasks.personal}
          onToggleTask={(id) => toggleTask("personal", id)}
        />

        <View className="flex-row items-center mt-4">
          <TextInput
            placeholder="Add a new task..."
            className="flex-1 p-3 rounded-lg bg-taskbackground"
          />

          <Pressable
            onPress={() => { }}
            className="bg-buttonbackground p-3 ml-4 rounded-xl items-center ml-2"
          >
            <Text className="text-white">ADD</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}