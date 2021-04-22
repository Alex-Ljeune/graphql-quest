import './App.css';
import {
  gql,
  useQuery,
} from "@apollo/client";

const LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.launches)

  return data.launches.map((launch,i) => (
    < div key ={i}>
      <h2>{launch.rocket['rocket_name']}</h2>
      <p>
        Mission name: {launch["mission_name"]}
      </p>
      <p>
        Launch date: {launch["launch_date_utc"]}
      </p>
      <p>
        Details {launch.details}
      </p>
      <p>
        Launch success: {launch["launch_success"]}
      </p>
    </div >
  ));
}


function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Launches />
    </div>
  );
}

export default App;
