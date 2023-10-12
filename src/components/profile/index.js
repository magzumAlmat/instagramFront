import Posts from "@/components/profile/posts";

export default function Profile (userId) {
    let isTrue = true;
  

    return (
        <>
            {isTrue ? (
                    <Posts userId={userId} />
                )
                :
                (
                    <h1>asd</h1>
                )}
        </>

    );
}