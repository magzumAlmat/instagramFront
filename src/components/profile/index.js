import Posts from "@/components/profile/posts";

export default function Profile () {
    let isTrue = true;

    return (
        <>
            {isTrue ? (
                    <Posts />
                )
                :
                (
                    <h1>asd</h1>
                )}
        </>

    );
}