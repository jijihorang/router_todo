import {Outlet} from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout.tsx";

function TodoIndexPage() {
    return (
        <BasicLayout>

            {/* Outlet : 하위 라우트가 렌더링될 위치를 설정 */}
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default TodoIndexPage;