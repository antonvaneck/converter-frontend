import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let http: { get: jasmine.Spy };
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ConverterService
      ],
    });
    http = jasmine.createSpyObj('HttpClient', ['get'])
    service = new ConverterService(<any> http);
  });

  it('should be created', () => {
    service = TestBed.get(ConverterService);
    expect(service).toBeTruthy();
  });

  it('convert http call', () => {
    const unitValue = {unit:"foot", value:1.};
    const service: ConverterService = TestBed.get(ConverterService);
    service.convert(unitValue)
    .subscribe(convertedUnitValue => {
      expect(convertedUnitValue.unit).toBe("asdf");
      expect(convertedUnitValue.value).toBe(0.3048);
    });
  });
});
