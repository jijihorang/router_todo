import {ITodo} from "../../types/todo.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";
import useTodoList from "../../hooks/useTodoList.ts";

function TodoListComponent() {

    const {loading, pageResponse, moveToRead} = useTodoList()

    const listLi = pageResponse.content.map((todo: ITodo) => {
        // todo 객체에서 필요한 속성을 구조 분해 할당
        const { mno, title, writer, dueDate } = todo;

        return (
            <li
                key={mno} // 각 li 요소의 고유 키로 mno 사용
                onClick={() => moveToRead(mno)}
                className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4 hover:bg-gray-50 transition duration-300"
            >
                <span className="text-gray-900 font-semibold">{mno}</span>
                <span className="text-gray-700">{title}</span>
                <span className="text-gray-500">{writer}</span>
                <span className="text-gray-400">{dueDate}</span>
            </li>
        );
    });


    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg">
            {loading && <LoadingComponent/>}
            <div className="text-2xl font-bold text-center mb-6">Todo List Component</div>

            <ul className="divide-y divide-gray-200">
                {listLi}
            </ul>

            <PageComponent pageResponse={pageResponse}/>
        </div>
    );
}

export default TodoListComponent;
