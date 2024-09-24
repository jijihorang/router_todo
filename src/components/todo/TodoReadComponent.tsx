import {ITodo} from "../../types/todo.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getOne} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";

const initState: ITodo = {
    mno: 0,
    title: '',
    writer: '',
    dueDate: ''
}

function TodoReadComponent() {

    const [loading, setLoading] = useState(false);

    // URL -> mno 파라미터를 추출
    const {mno} = useParams();

    // todo 상태를 초기화
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
        // mno 숫자로 변환
        const numMno = Number(mno)

        setLoading(true)

        // API 호출로 특정 Todo 가져옴
        getOne(numMno).then(res => {
            // 응답으로 받은 Todo 정보를 상태로 설정
            setTodo(res)
            setLoading(false)
        })
    }, [mno]) // mno 변경 시 effect 실행

    return (
        <div>
            {loading && <LoadingComponent/>}

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                <input
                    type="text"
                    name="title"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 w-full"
                    placeholder="Enter Title"
                    value={todo.title}
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Writer</label>
                <input
                    type="text"
                    name="writer"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 w-full"
                    placeholder="Enter Writer"
                    value={todo.writer}
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Due Date</label>
                <input
                    type="date"
                    name="dueDate"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 w-full"
                    value={todo.dueDate}
                    readOnly
                />
            </div>
        </div>
    )
        ;
}

export default TodoReadComponent;