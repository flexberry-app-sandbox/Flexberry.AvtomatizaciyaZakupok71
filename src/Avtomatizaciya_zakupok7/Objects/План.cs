﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_zakupok7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// План.
    /// </summary>
    // *** Start programmer edit section *** (План CustomAttributes)

    // *** End programmer edit section *** (План CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПланE", new string[] {
            "ЭтоУслуга as \'Это услуга\'",
            "Количество as \'Количество\'",
            "Номенклатура as \'Номенклатура\'",
            "Номенклатура.Номенклатура as \'Номенклатура\'",
            "Номенклатура.ЕдиницыИзмер.ЕдиницаИзмер as \'ЕдиницаИзмер\'",
            "Номенклатура.Контрагенты.Контрагент as \'Контрагент\'"}, Hidden=new string[] {
            "Номенклатура.Номенклатура"})]
    [MasterViewDefineAttribute("ПланE", "Номенклатура", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номенклатура")]
    public class План : ICSSoft.STORMNET.DataObject
    {
        
        private bool fЭтоУслуга;
        
        private int fКоличество;
        
        private IIS.Avtomatizaciya_zakupok7.Номенклатура fНоменклатура;
        
        private IIS.Avtomatizaciya_zakupok7.ПланЗакупок fПланЗакупок;
        
        // *** Start programmer edit section *** (План CustomMembers)

        // *** End programmer edit section *** (План CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (План.Количество CustomAttributes)

        // *** End programmer edit section *** (План.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (План.Количество Get start)

                // *** End programmer edit section *** (План.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (План.Количество Get end)

                // *** End programmer edit section *** (План.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (План.Количество Set start)

                // *** End programmer edit section *** (План.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (План.Количество Set end)

                // *** End programmer edit section *** (План.Количество Set end)
            }
        }
        
        /// <summary>
        /// ЭтоУслуга.
        /// </summary>
        // *** Start programmer edit section *** (План.ЭтоУслуга CustomAttributes)

        // *** End programmer edit section *** (План.ЭтоУслуга CustomAttributes)
        public virtual bool ЭтоУслуга
        {
            get
            {
                // *** Start programmer edit section *** (План.ЭтоУслуга Get start)

                // *** End programmer edit section *** (План.ЭтоУслуга Get start)
                bool result = this.fЭтоУслуга;
                // *** Start programmer edit section *** (План.ЭтоУслуга Get end)

                // *** End programmer edit section *** (План.ЭтоУслуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (План.ЭтоУслуга Set start)

                // *** End programmer edit section *** (План.ЭтоУслуга Set start)
                this.fЭтоУслуга = value;
                // *** Start programmer edit section *** (План.ЭтоУслуга Set end)

                // *** End programmer edit section *** (План.ЭтоУслуга Set end)
            }
        }
        
        /// <summary>
        /// План.
        /// </summary>
        // *** Start programmer edit section *** (План.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (План.Номенклатура CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенклатура"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_zakupok7.Номенклатура Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (План.Номенклатура Get start)

                // *** End programmer edit section *** (План.Номенклатура Get start)
                IIS.Avtomatizaciya_zakupok7.Номенклатура result = this.fНоменклатура;
                // *** Start programmer edit section *** (План.Номенклатура Get end)

                // *** End programmer edit section *** (План.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (План.Номенклатура Set start)

                // *** End programmer edit section *** (План.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (План.Номенклатура Set end)

                // *** End programmer edit section *** (План.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Avtomatizaciya_zakupok7.ПланЗакупок.
        /// </summary>
        // *** Start programmer edit section *** (План.ПланЗакупок CustomAttributes)

        // *** End programmer edit section *** (План.ПланЗакупок CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПланЗакупок"})]
        public virtual IIS.Avtomatizaciya_zakupok7.ПланЗакупок ПланЗакупок
        {
            get
            {
                // *** Start programmer edit section *** (План.ПланЗакупок Get start)

                // *** End programmer edit section *** (План.ПланЗакупок Get start)
                IIS.Avtomatizaciya_zakupok7.ПланЗакупок result = this.fПланЗакупок;
                // *** Start programmer edit section *** (План.ПланЗакупок Get end)

                // *** End programmer edit section *** (План.ПланЗакупок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (План.ПланЗакупок Set start)

                // *** End programmer edit section *** (План.ПланЗакупок Set start)
                this.fПланЗакупок = value;
                // *** Start programmer edit section *** (План.ПланЗакупок Set end)

                // *** End programmer edit section *** (План.ПланЗакупок Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПланE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланE", typeof(IIS.Avtomatizaciya_zakupok7.План));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of План.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПлан CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПлан CustomAttributes)
    public class DetailArrayOfПлан : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Avtomatizaciya_zakupok7.DetailArrayOfПлан members)

        // *** End programmer edit section *** (IIS.Avtomatizaciya_zakupok7.DetailArrayOfПлан members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type План by index.
        /// </summary>
        /// <summary>
        /// Adds object with type План.
        /// </summary>
        public DetailArrayOfПлан(IIS.Avtomatizaciya_zakupok7.ПланЗакупок fПланЗакупок) : 
                base(typeof(План), ((ICSSoft.STORMNET.DataObject)(fПланЗакупок)))
        {
        }
        
        public IIS.Avtomatizaciya_zakupok7.План this[int index]
        {
            get
            {
                return ((IIS.Avtomatizaciya_zakupok7.План)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Avtomatizaciya_zakupok7.План dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
