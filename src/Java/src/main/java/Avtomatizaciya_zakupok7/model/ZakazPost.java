package Avtomatizaciya_zakupok7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_zakupok7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЗаказПост
 */
@Entity(name = "IISAvtomatizaciya_zakupok7ЗаказПост")
@Table(schema = "public", name = "ЗаказПост")
public class ZakazPost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СостояниеОплаты")
    private String состояниеоплаты;

    @Column(name = "СостОтгрузки")
    private String состотгрузки;

    @Column(name = "СуммаВклНДС")
    private Boolean суммавклндс;

    @Column(name = "СуммаДокумента")
    private Integer суммадокумента;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizacii")
    @Convert("Organizacii")
    @Column(name = "Организации", length = 16, unique = true, nullable = false)
    private UUID _organizaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizacii", insertable = false, updatable = false)
    private Organizacii organizacii;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragenty")
    @Convert("Kontragenty")
    @Column(name = "Контрагенты", length = 16, unique = true, nullable = false)
    private UUID _kontragentyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragenty", insertable = false, updatable = false)
    private Kontragenty kontragenty;

    @OneToMany(mappedBy = "zakazpost", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHZakaz> tchzakazs;

    @OneToMany(mappedBy = "otchetozak", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TchOtchet> tchotchets;


    public ZakazPost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСостояниеОплаты() {
      return состояниеоплаты;
    }

    public void setСостояниеОплаты(String состояниеоплаты) {
      this.состояниеоплаты = состояниеоплаты;
    }

    public String getСостОтгрузки() {
      return состотгрузки;
    }

    public void setСостОтгрузки(String состотгрузки) {
      this.состотгрузки = состотгрузки;
    }

    public Boolean getСуммаВклНДС() {
      return суммавклндс;
    }

    public void setСуммаВклНДС(Boolean суммавклндс) {
      this.суммавклндс = суммавклндс;
    }

    public Integer getСуммаДокумента() {
      return суммадокумента;
    }

    public void setСуммаДокумента(Integer суммадокумента) {
      this.суммадокумента = суммадокумента;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}