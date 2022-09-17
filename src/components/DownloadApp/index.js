import React from 'react';
import android from '../../assets/images/Android_robot.svg.png';
import androidApp from '../../appSrc/_PetBooking_16013570.apk';

export const DownloadApp = () => {
    return (
        <div className='container'>
            <div className='download_wrapperFlex'>
                <div className='download_leftBlock'>
                    <h2 className='download_heading leftBlock_el'>Скачайте приложение для Android</h2>
                    <img className='leftBlock_el' src={android} alt="иконка андроид"/>
                    <a className='leftBlock_el' href={androidApp} download>Скачать</a>
                </div>
                <div className='download_rightBlock'>
                <h2 className='download_heading'> Инструкция по скачиванию</h2>
                  <ol>
                    <li className='rightBlock_li'>
                        Загрузите установочный файл с расширением .apk, нажав на кнопку "Скачать".
                    </li>
                    <li className='rightBlock_li'>
                        Найдите установочный файл на своем устройстве, нажмите на него и выберите "Установить".
                    </li>
                    <li className='rightBlock_li'>
                        Если установка заблокирована: 
                        <br/> - В всплывающем окне  нажмите "Настройки".
                        <br/> - Нажмите "Разрешить установку приложений из неизвестных источников". 
                        <br/> - Повторите установку приложения.
                    </li>
                    <li className='rightBlock_li'>
                        Приложение готово к использованию!
                    </li>
                  </ol>
                </div>
            </div>
        </div>
    )
}