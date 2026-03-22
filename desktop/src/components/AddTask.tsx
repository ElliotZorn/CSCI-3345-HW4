import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function AddTask({ addTask }: { addTask: (taskText: string) => void }) {
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        addTask(inputValue);
        setInputValue("");
    };

    return (
        <Field className="flex justify-center mt-8 w-1/2 mx-auto">
            <ButtonGroup>
                <Input
                    className="bg-[#FFF3E7]"
                    id="input-button-group"
                    placeholder="What do you need to do?"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                />

                <Button
                    className="bg-[#94BDFA] text-[#808080]"
                    variant="outline"
                    onClick={handleAddTask}
                >
                    ADD
                </Button>
            </ButtonGroup>
        </Field>
    )
}
