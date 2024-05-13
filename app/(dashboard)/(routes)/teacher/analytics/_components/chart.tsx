"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

import { Card } from "@/components/ui/card";

interface ChartProps {
    data: {
        name: string;
        total: number;
    }[];
}

export const Chart = ({
    data
}:ChartProps) => {
    return (
        <Card>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <XAxis
                        dataKey = "name"
                        stroke = "#"
                        fontSize = {12}
                        tickLine = {false}
                        axisLine = {false}
                    />
                    <YAxis
                        stroke = "#"
                        fontSize = {12}
                        tickLine = {false}
                        axisLine = {false}
                        tickFormatter={(value) => `COP ${value}`}
                    />
                    <Bar
                        dataKey="total"
                        fill="#3aafa9"
                        radius={[4,4,0,0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}