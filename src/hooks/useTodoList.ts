import {createSearchParams, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPageResponse} from "../types/todo.ts";
import {getTodoList} from "../api/todoAPI.ts";

// 페이지 정보의 초기 상태
const initialState = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
}

const useTodoList = () => {
    const [query] = useSearchParams(); // 쿼리 파라미터를 가져옴

    // 'page' 쿼리 파라미터를 읽고 기본값 1 설정
    const page: number = Number(query.get("page") || 1);

    // 'size' 쿼리 파라미터를 읽고 기본값 10 설정
    const size: number = Number(query.get("size") || 10);

    // pageResponse 상태를 초기 상태로 설정
    const [pageResponse, setPageResponse] = useState<IPageResponse>(initialState);

    const [loading, setLoading] = useState<boolean>(false)

    // 쿼리 문자열 생성
    const queryStr = createSearchParams({ page: String(page), size: String(size)})

    // 현재 URL의 위치 정보를 가져옴
    const location = useLocation();

    // 이동
    const navigate = useNavigate()

    // read 페이지로 이동하는 함수
    const moveToRead = (mno: number | undefined) => {
        navigate({
            pathname: `/todo/read/${mno}`,
            search: `?${queryStr}`
        })
    }

    useEffect(() => {
        setLoading(true); // 로딩 상태를 true 설정

        // 비동기적으로 todo 목록을 가져옴
        getTodoList(page, size).then(data => {
            // 가져온 데이터를 상태에 설정
            setPageResponse(data);
            setLoading(false); // 로딩 상태를 false 설정
        });
    }, [query, location.key]); // query와 location.key가 변경될 때마다 실행

    return {loading, pageResponse, moveToRead}
}

export default useTodoList