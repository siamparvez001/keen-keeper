import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineFriendContext } from '../../context/TimelineFriendContext';
// import { RechartsDevtools } from '@recharts/devtools';

const Stats = () => {
    // export default function PieChartWithPaddingAngle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {

    const { timelineFriend } = useContext(TimelineFriendContext)
    const callCount = timelineFriend.filter(item => item.type === "call").length;
    const textCount = timelineFriend.filter(item => item.type === "text").length;
    const videoCount = timelineFriend.filter(item => item.type === "video").length;

    const data = [
        { name: "Call", value: callCount, fill: "#dc2626" },
        { name: "Text", value: textCount, fill: "#ca8a04" },
        { name: "Video", value: videoCount, fill: "#052e16" }
    ]
    return (
        <div className='bg-gray-100 py-20'>
            <div className='container mx-auto '>
                <h1 className='text-4xl font-bold my-5'>Friendship Analytics</h1>
                <div className='bg-white rounded-2xl px-10 py-5'>
                    <p className='text-2xl opacity-70'>By Interaction Type</p>
                    <div className='flex justify-center items-center my-10 space-y-5'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"

                                cornerRadius="50%"
                                fill="#8884d8"

                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            {/* <RechartsDevtools /> */}
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>


    );
}
    ;

export default Stats;