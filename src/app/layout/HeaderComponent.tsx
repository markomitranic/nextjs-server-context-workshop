import { User } from "@/lib/domain/User";

export function HeaderComponent({user}: {user: User}) {
    return <div style={{border: "1px solid teal"}}>
        <p>Header User: {JSON.stringify(user)}</p>
    </div>;
}