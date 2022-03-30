import { memo, useEffect, useState, VFC } from "react";
import { useNavigate } from "react-router";

import StatsService from "../../api/services/stats";

import { StatsStore } from "../../utils";

import AppContext from "../../store/context/app";
import StatsContext from "../../store/context/stats";

import Navigation from "../../components/navbar";

import './profile.scss';

const Profile: VFC = () => {
  const { data: { user: { _id: id }, token } } = AppContext.useContext();

  const { data, data: {
    totalGames,
    moves,
    bestGame
  }, setData: setStatsData } = StatsContext.useContext();

  const [stats, setStats] = useState<StatsStore>(data);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = id || localStorage.getItem('userId');
    const authToken = token || localStorage.getItem('AuthToken')

    if (!userId && !authToken) navigate('/login');

    StatsService.get(userId!)
      .then((res) => {
        setStatsData(res.data);
        setStats(res.data);
      })
      .catch((err) => {
        navigate('/login');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setStats(data);
  }, [data]);

  return (
    <main className='profile__container container'>
      <Navigation />

      <section className='profile__content'>
        <h1 className='profile__title'>Profile</h1>

        <h3 className='profile__subtitle'>Your statistics:</h3>

        <article className='profile__stats-item'>
          <h4 className='profile__stats-item_title'>Total games played: </h4>
          <p>{stats.totalGames}</p>
        </article>

        <article className='profile__stats-item'>
          <h4 className='profile__stats-item_title'>Best game: </h4>

          {/* <article>
            <h5 className='profile__stats-item_subtitle'>Time: </h5>
            <p>{stats.bestGame.time}</p>
          </article> */}

          <article className='profile__stats-subitem'>
            <h5 className='profile__stats-item_subtitle'>Moves: </h5>
            <p>{stats.moves}</p>
          </article>

          <article className='profile__stats-subitem'>
            <h5 className='profile__stats-item_subtitle'>Field: </h5>
            <p>{stats.bestGame.field.width} x {stats.bestGame.field.height}</p>
          </article>
        </article>
      </section>
    </main>
  );
};

export default memo(Profile);