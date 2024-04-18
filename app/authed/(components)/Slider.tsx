export default function Slider({ props }: { props: any }) {
    return (
        <div className="w-[80%] mx-auto">
            <div className="text-3xl text-center grid grid-cols-2 mt-12 mb-2">
                <button onClick={() => props.setDashActive(true)}>
                    Dashboard
                </button>
                <button onClick={() => props.setDashActive(false)}>
                    Quizzes
                </button>
            </div>
            <div className="flex h-2 bg-gray-200 rounded-full">
                <div className={`w-1/2 h-2 bg-green-400 rounded-full transition-all duration-500 ${props.dashActive ? '' : 'ml-[50%]'}`} />
            </div>
        </div>
    )
}